'use client';

import Link from 'next/link'
import Button from './Button'

export default function Resume() {
    return (
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Bonjour, je suis <span className="text-[rgb(var(--text-primary))]">Elouan</span>
          </h1>
          <p className="text-xl text-white-950 mb-8 max-w-2xl">
            Apprenant Développeur Full Stack essayant de créer des expériences web innovantes.
          </p>
          <div className="flex gap-4">
            <Button href="/projects" variant="primary">Voir mes projets</Button>
            <Button href="/contact" variant="secondary">Me contacter</Button>
          </div>
        </div>
      </section>
    );
}