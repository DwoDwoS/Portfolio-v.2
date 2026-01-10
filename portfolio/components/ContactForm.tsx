'use client';
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/contexts/ThemeContext';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mqaglydl");
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label 
            htmlFor="name" 
            className="text-[rgb(var(--text-secondary))]"
          >
            Nom
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className={`w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out ${
              theme === 'light' 
                ? 'bg-amber-50 text-gray-900 border-gray-300 placeholder-gray-500' 
                : 'bg-gray-800 text-white border-gray-600 placeholder-gray-400'
            }`}
            placeholder="Votre nom ou pseudo"
          />
        </div>
        <div>
          <label 
            htmlFor="email" 
            className="text-[rgb(var(--text-secondary))]"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className={`w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out ${
              theme === 'light' 
                ? 'bg-amber-50 text-gray-900 border-gray-300 placeholder-gray-500' 
                : 'bg-gray-800 text-white border-gray-600 placeholder-gray-400'
            }`}
            placeholder="Votre adresse mail"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <label 
            htmlFor="message" 
            className="text-[rgb(var(--text-secondary))]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out resize-none ${
              theme === 'light' 
                ? 'bg-amber-50 text-gray-900 border-gray-300 placeholder-gray-500' 
                : 'bg-gray-800 text-white border-gray-600 placeholder-gray-400'
            }`}
            placeholder="Votre message..."
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`w-full py-3 px-6 rounded-lg font-medium text-white
                   transition-all duration-200 ease-in-out
                   ${state.succeeded
                     ? 'bg-green-500 hover:bg-green-600'
                     : `${theme === 'light' ? 'bg-linear-to-br from-amber-400 to-amber-500 via-amber-400 hover:bg-amber-500' : 'bg-blue-800 hover:bg-blue-900'}`
                   }
                   disabled:opacity-75 disabled:cursor-not-allowed
                   hover:-translate-y-0.5
                   flex items-center justify-center space-x-2`}
        >
          {state.submitting ? (
            <>
              <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
              <span>Envoi en cours...</span>
            </>
          ) : state.succeeded ? (
            <>
              <FontAwesomeIcon icon={faCheck} />
              <span>Message envoyé !</span>
            </>
          ) : (
            <>
              <FontAwesomeIcon 
                icon={faPaperPlane} 
                className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
              />
              <span>Envoyer le message</span>
            </>
          )}
        </button>
      </form>

      {state.succeeded && (
        <div className="mt-6 p-4 bg-green-100 dark:bg-green-900 rounded-lg">
          <p className="text-green-700 dark:text-green-200 text-center">
            Merci pour votre message ! Je vous répondrai dans les plus brefs délais.
          </p>
        </div>
      )}
    </div>
  );
}