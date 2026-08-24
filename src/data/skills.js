import html from "../assets/html.webp";
import css from "../assets/css.webp";
import react from "../assets/react.webp";
import tailwind from "../assets/tailwind.webp";
import native from "../assets/native.webp";
import js from "../assets/js.webp";
import node from "../assets/node.webp";
import express from "../assets/express.webp";
import vercel from "../assets/vercel.webp";
import aws from "../assets/aws.webp";
import azure from "../assets/azure.webp";
import figma from "../assets/figma.webp";
import github from "../assets/github.webp";
import vite from "../assets/vite.webp";
import mui from "../assets/mui.webp";

import python from "../assets/python.webp";
import php from "../assets/php.webp";
import laravel from "../assets/laravel.webp";
import elixir from "../assets/elixir.webp";
import phoenix from "../assets/phoenix.webp";

import mongodb from "../assets/mongo.webp";
import postgresql from "../assets/postgresql.webp";
import mysql from "../assets/mysql.webp";
import sqlserver from "../assets/sqlserver.webp";
import mariadb from "../assets/mariadb.webp";
import firebase from "../assets/firebase.webp";

import render from "../assets/render.webp";
import cpanel from "../assets/cpanel.webp";

import claude from "../assets/claude.webp";
import affinity from "../assets/affinity.webp";
import illustrator from "../assets/illustrator.webp";
import photoshop from "../assets/photoshop.webp";

import cursor from "../assets/cursor.webp";
import gemini from "../assets/gemini.webp";

import postman from "../assets/postman.webp";
import linear from "../assets/linear.webp";
import clickup from "../assets/clickup.webp";
import notion from "../assets/notion.webp";
import discord from "../assets/discord.webp";

export const skills = [
  {
    id: "frontend",
    title: "Frontend",
    label: "Frontend",
    items: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "React", icon: react },
      { name: "Vite", icon: vite },
      { name: "Tailwind", icon: tailwind },
      { name: "Expo", icon: native },
      { name: "MUI Components", icon: mui },
    ],
  },
  {
    id: "backend",
    title: "Backend / Lenguajes",
    label: "Backend",
    items: [
      { name: "JS", icon: js },
      { name: "Python", icon: python },
      { name: "PHP", icon: php },
      { name: "Laravel", icon: laravel },
      { name: "Elixir", icon: elixir },
      { name: "Phoenix", icon: phoenix },
      { name: "Node.js", icon: node },
      { name: "Express", icon: express },
    ],
  },
  {
    id: "database",
    title: "Bases de Datos",
    label: "Database",
    items: [
      { name: "MongoDB", icon: mongodb },
      { name: "PostgreSQL", icon: postgresql     },
      { name: "MySQL", icon: mysql },
      { name: "SQL Server", icon: sqlserver },
      { name: "MariaDB", icon: mariadb },
      { name: "Firebase", icon: firebase },
    ],
  },
  {
    id: "deployment",
    title: "Despliegues y Nube",
    label: "Deployment",
    items: [
      { name: "Render", icon: render },
      { name: "Vercel", icon: vercel },
      { name: "AWS", icon: aws },
      { name: "Azure", icon: azure },
      { name: "cPanel", icon: cpanel },
    ],
  },
  {
    id: "design",
    title: "Diseño",
    label: "Design",
    items: [
      { name: "Figma", icon: figma },
      { name: "Claude Design" , icon: claude },
      { name: "Affinity" , icon: affinity },
      { name: "Illustrator" , icon: illustrator },
      { name: "Photoshop" , icon: photoshop },
    ],
  },
  {
    id: "ai",
    title: "IA",
    label: "AI Tools",
    items: [{ name: "Cursor" , icon: cursor }, { name: "Claude" , icon: claude }, { name: "Gemini" , icon: gemini }],
  },
  {
    id: "tools",
    title: "Herramientas y Gestión",
    label: "Other",
    items: [
      { name: "GitHub", icon: github },
      { name: "Postman" , icon: postman },
      { name: "Linear" , icon: linear },
      { name: "ClickUp" , icon: clickup },
      { name: "Notion" , icon: notion },
      { name: "Discord" , icon: discord },
    ],
  },
];
