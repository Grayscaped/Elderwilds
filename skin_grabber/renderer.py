import pygame
from pygame.locals import *
from OpenGL.GL import *
from OpenGL.GLU import *

import trimesh
from PIL import Image
import numpy as np


def createImage(username):
    WIDTH, HEIGHT = 600, 600

    pygame.init()

    pygame.display.set_mode(
        (WIDTH, HEIGHT),
        DOUBLEBUF | OPENGL | SRCALPHA
    )

    # Projection
    glMatrixMode(GL_PROJECTION)
    glLoadIdentity()
    gluPerspective(45, WIDTH / HEIGHT, 0.1, 100.0)

    glMatrixMode(GL_MODELVIEW)

    glEnable(GL_DEPTH_TEST)
    glEnable(GL_TEXTURE_2D)

    glEnable(GL_ALPHA_TEST)
    glAlphaFunc(GL_GREATER, 0.5)

    glEnable(GL_CULL_FACE)
    glCullFace(GL_BACK)
    glFrontFace(GL_CCW)

    def create_fbo(width, height):
        fbo = glGenFramebuffers(1)
        glBindFramebuffer(GL_FRAMEBUFFER, fbo)

        # Color buffer
        color_tex = glGenTextures(1)
        glBindTexture(GL_TEXTURE_2D, color_tex)

        glTexImage2D(
            GL_TEXTURE_2D,
            0,
            GL_RGBA,
            width,
            height,
            0,
            GL_RGBA,
            GL_UNSIGNED_BYTE,
            None
        )

        glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR)
        glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR)

        glFramebufferTexture2D(
            GL_FRAMEBUFFER,
            GL_COLOR_ATTACHMENT0,
            GL_TEXTURE_2D,
            color_tex,
            0
        )

        # Depth buffer
        depth = glGenRenderbuffers(1)
        glBindRenderbuffer(GL_RENDERBUFFER, depth)

        glRenderbufferStorage(
            GL_RENDERBUFFER,
            GL_DEPTH_COMPONENT24,
            width,
            height
        )

        glFramebufferRenderbuffer(
            GL_FRAMEBUFFER,
            GL_DEPTH_ATTACHMENT,
            GL_RENDERBUFFER,
            depth
        )

        if glCheckFramebufferStatus(GL_FRAMEBUFFER) != GL_FRAMEBUFFER_COMPLETE:
            raise RuntimeError("Framebuffer incomplete")

        glBindFramebuffer(GL_FRAMEBUFFER, 0)

        return fbo


    fbo = create_fbo(WIDTH, HEIGHT)


    def load_gl_texture(image):
        img = Image.open(image).convert("RGBA")
        img = img.transpose(Image.FLIP_TOP_BOTTOM)

        data = np.array(img, dtype=np.uint8)

        tex = glGenTextures(1)
        glBindTexture(GL_TEXTURE_2D, tex)

        glTexParameteri(
            GL_TEXTURE_2D,
            GL_TEXTURE_MIN_FILTER,
            GL_NEAREST
        )
        glTexParameteri(
            GL_TEXTURE_2D,
            GL_TEXTURE_MAG_FILTER,
            GL_NEAREST
        )

        glTexImage2D(
            GL_TEXTURE_2D,
            0,
            GL_RGBA,
            img.width,
            img.height,
            0,
            GL_RGBA,
            GL_UNSIGNED_BYTE,
            data
        )

        return tex


    mesh = trimesh.load(
        "model.obj",
        force="mesh",
        process=False
    )

    vertices = mesh.vertices
    faces = mesh.faces
    uv = mesh.visual.uv

    texture = load_gl_texture("skins/" + username + ".png")


    def draw_mesh():

        glBindTexture(GL_TEXTURE_2D, texture)

        glBegin(GL_TRIANGLES)

        for face in faces:
            for index in face:
                glTexCoord2fv(uv[index])
                glVertex3fv(vertices[index])

        glEnd()


    def save_transparent_screenshot(filename):

        glBindFramebuffer(GL_FRAMEBUFFER, fbo)

        pixels = glReadPixels(
            0,
            0,
            WIDTH,
            HEIGHT,
            GL_RGBA,
            GL_UNSIGNED_BYTE
        )

        image = Image.frombytes(
            "RGBA",
            (WIDTH, HEIGHT),
            pixels
        )

        image = image.transpose(Image.FLIP_TOP_BOTTOM)

        image.save(filename)

        glBindFramebuffer(GL_FRAMEBUFFER, 0)


    # Render once
    glBindFramebuffer(GL_FRAMEBUFFER, fbo)

    glViewport(0, 0, WIDTH, HEIGHT)

    glClearColor(0, 0, 0, 0)
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)

    glLoadIdentity()

    # Model placement
    glTranslatef(0.1, -2.6, -2)
    glRotatef(30.0, -0.3, 1, 0)

    draw_mesh()

    save_transparent_screenshot("images/" + username + ".png")

    glBindFramebuffer(GL_FRAMEBUFFER, 0)

    pygame.display.flip()

    pygame.quit()
