"use client"

import { useState } from "react"
import { X, CheckCircle2, Shield, Lock, Eye, FileText, Calendar, Gavel, Cookie, Mail, Phone, MapPin } from "lucide-react"

export default function PrivacyModal({ isOpen, onClose, onAccept }) {
  const [accepted, setAccepted] = useState(false)

  if (!isOpen) return null

  const handleAccept = () => {
    setAccepted(true)
    onAccept()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-xl">
                <Shield className="size-6 text-blue-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-oswald text-[#2B3A64]">Datenschutzerklärung</h2>
                <p className="text-slate-600 font-oswald">DSH Reinigungsservice</p>
                <p className="text-xs text-slate-500 font-oswald">Letzte Aktualisierung: 10. August 2025</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
            >
              <X className="size-6 text-slate-600" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          <div className="prose prose-slate max-w-none">
            <div className="space-y-6">
              {/* Introduction */}
              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-slate-700 font-oswald leading-relaxed">
                  Wir bei <strong>DSH Reinigungsservice</strong> respektieren Ihre Privatsphäre und verpflichten uns, 
                  Ihre personenbezogenen Daten gemäß den geltenden Datenschutzgesetzen, einschließlich der 
                  Datenschutz-Grundverordnung (DSGVO – Verordnung (EU) 2016/679) und des Bundesdatenschutzgesetzes (BDSG), zu schützen.
                </p>
                <p className="text-slate-700 font-oswald leading-relaxed mt-3">
                  Mit der Nutzung unserer Website oder der Kontaktaufnahme mit uns erklären Sie sich mit den 
                  Bedingungen dieser Datenschutzerklärung einverstanden.
                </p>
              </div>

              {/* Data Collection */}
              <div>
                <h3 className="text-lg font-semibold font-oswald text-[#2B3A64] mb-3 flex items-center gap-2">
                  <Eye className="size-5 text-blue-600" />
                  1. Welche Daten wir erheben
                </h3>
                <p className="text-slate-700 font-oswald mb-3">
                  Wenn Sie über unsere Website, per E-Mail oder telefonisch Kontakt mit uns aufnehmen, können wir folgende personenbezogene Daten erheben:
                </p>
                <ul className="space-y-2 text-slate-700 font-oswald ml-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Vollständiger Name</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>E-Mail-Adresse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Telefonnummer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Postanschrift oder Einsatzort der Dienstleistung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Weitere freiwillige Angaben (z. B. Anmerkungen, besondere Wünsche)</span>
                  </li>
                </ul>
              </div>

              {/* Purpose */}
              <div>
                <h3 className="text-lg font-semibold font-oswald text-[#2B3A64] mb-3 flex items-center gap-2">
                  <FileText className="size-5 text-blue-600" />
                  2. Zweck der Datenerhebung
                </h3>
                <p className="text-slate-700 font-oswald mb-3">
                  Wir verarbeiten Ihre Daten ausschließlich zu folgenden Zwecken:
                </p>
                <ul className="space-y-2 text-slate-700 font-oswald ml-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Kontaktaufnahme zur Beantwortung Ihrer Anfragen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Erstellung von Angeboten und Vereinbarung von Terminen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Zusendung relevanter Informationen zu Ihrer Anfrage oder Ihrem Auftrag</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Verbesserung unserer Servicequalität</span>
                  </li>
                </ul>
              </div>

              {/* Legal Basis */}
              <div>
                <h3 className="text-lg font-semibold font-oswald text-[#2B3A64] mb-3 flex items-center gap-2">
                  <Gavel className="size-5 text-blue-600" />
                  3. Rechtsgrundlagen der Verarbeitung
                </h3>
                <p className="text-slate-700 font-oswald mb-3">
                  Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von:
                </p>
                <ul className="space-y-2 text-slate-700 font-oswald ml-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Art. 6 Abs. 1 lit. a DSGVO</strong> – Ihre ausdrückliche Einwilligung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Art. 6 Abs. 1 lit. b DSGVO</strong> – Verarbeitung zur Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen</span>
                  </li>
                </ul>
              </div>

              {/* Data Protection */}
              <div>
                <h3 className="text-lg font-semibold font-oswald text-[#2B3A64] mb-3 flex items-center gap-2">
                  <Shield className="size-5 text-blue-600" />
                  4. Schutz Ihrer Daten
                </h3>
                <p className="text-slate-700 font-oswald mb-3">
                  Wir setzen geeignete technische und organisatorische Maßnahmen ein, um Ihre Daten vor Verlust, 
                  Missbrauch, unbefugtem Zugriff oder Offenlegung zu schützen, darunter:
                </p>
                <ul className="space-y-2 text-slate-700 font-oswald ml-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>SSL/TLS-Verschlüsselung bei der Datenübertragung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Zugriffsbeschränkungen für autorisierte Mitarbeiter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Regelmäßige Überprüfung unserer Sicherheitsmaßnahmen</span>
                  </li>
                </ul>
              </div>

              {/* Third Party */}
              <div>
                <h3 className="text-lg font-semibold font-oswald text-[#2B3A64] mb-3">
                  5. Weitergabe an Dritte
                </h3>
                <p className="text-slate-700 font-oswald">
                  Wir geben Ihre Daten nicht an Dritte weiter, außer wenn dies gesetzlich vorgeschrieben ist oder 
                  für die Erbringung unserer Dienstleistung notwendig ist (z. B. vertrauenswürdige Zahlungs- oder Servicepartner). 
                  In solchen Fällen achten wir darauf, nur mit Partnern zusammenzuarbeiten, die ebenfalls angemessene Datenschutzstandards einhalten.
                </p>
              </div>

              {/* Storage Duration */}
              <div>
                <h3 className="text-lg font-semibold font-oswald text-[#2B3A64] mb-3 flex items-center gap-2">
                  <Calendar className="size-5 text-blue-600" />
                  6. Speicherdauer
                </h3>
                <p className="text-slate-700 font-oswald">
                  Wir speichern Ihre Daten nur so lange, wie es für die Erfüllung der oben genannten Zwecke notwendig ist 
                  oder wie es gesetzlich vorgeschrieben wird. Sobald die Daten nicht mehr benötigt werden, werden sie sicher gelöscht oder anonymisiert.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h3 className="text-lg font-semibold font-oswald text-[#2B3A64] mb-3">
                  7. Ihre Rechte
                </h3>
                <p className="text-slate-700 font-oswald mb-3">
                  Sie haben gemäß DSGVO folgende Rechte:
                </p>
                <ul className="space-y-2 text-slate-700 font-oswald ml-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Recht auf Auskunft über Ihre gespeicherten Daten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Recht auf Berichtigung unrichtiger Daten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Recht auf Löschung („Recht auf Vergessenwerden")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Recht auf Einschränkung der Verarbeitung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Recht auf Datenübertragbarkeit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Recht auf Widerspruch gegen die Verarbeitung</span>
                  </li>
                </ul>
                <p className="text-slate-700 font-oswald mt-3">
                  Um eines dieser Rechte auszuüben, kontaktieren Sie uns bitte unter den unten angegebenen Kontaktdaten.
                </p>
              </div>

              {/* Cookies */}
              <div>
                <h3 className="text-lg font-semibold font-oswald text-[#2B3A64] mb-3 flex items-center gap-2">
                  <Cookie className="size-5 text-blue-600" />
                  8. Cookies
                </h3>
                <p className="text-slate-700 font-oswald">
                  Unsere Website kann Cookies verwenden, um Ihre Benutzererfahrung zu verbessern. 
                  Sie können Cookies in den Einstellungen Ihres Browsers ablehnen oder verwalten. 
                  Informationen über genutzte Cookie-Typen und deren Zweck können in einer separaten Cookie-Richtlinie erläutert werden.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold font-oswald text-[#2B3A64] mb-3 flex items-center gap-2">
                  <Mail className="size-5 text-blue-600" />
                  9. Kontakt
                </h3>
                <p className="text-slate-700 font-oswald mb-3">
                  Für Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte wenden Sie sich bitte an:
                </p>
                <div className="bg-slate-50 p-4 rounded-xl space-y-2">
                  <div className="flex items-center gap-2">
                    <strong className="font-oswald text-[#2B3A64]">DSH Reinigungsservice</strong>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Mail className="size-4 text-blue-600" />
                    <span>E-Mail: info@sdh-gebäudereinigung.de</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Phone className="size-4 text-blue-600" />
                    <span>Phone: +49 82150824751</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <MapPin className="size-4 text-blue-600" />
                    <span>Adresse: [Drentwrttstr. 12, 86154 Augsburg]</span>
                  </div>
                </div>
              </div>

              {/* Changes */}
              <div>
                <h3 className="text-lg font-semibold font-oswald text-[#2B3A64] mb-3">
                  10. Änderungen dieser Datenschutzerklärung
                </h3>
                <p className="text-slate-700 font-oswald">
                  Wir behalten uns vor, diese Datenschutzerklärung jederzeit zu ändern. 
                  Änderungen werden auf dieser Seite mit dem aktualisierten Datum veröffentlicht.
                </p>
              </div>

              {/* Legal Basis */}
              <div className="bg-blue-50 p-4 rounded-xl">
                <h3 className="text-lg font-semibold font-oswald text-[#2B3A64] mb-3">
                  Rechtliche Grundlagen:
                </h3>
                <ul className="space-y-1 text-slate-700 font-oswald">
                  <li>• Datenschutz-Grundverordnung (DSGVO) – Verordnung (EU) 2016/679</li>
                  <li>• Bundesdatenschutzgesetz (BDSG)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-slate-200 px-6 py-4 rounded-b-2xl">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={handleAccept}
              disabled={!accepted}
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-medium shadow-md hover:-translate-y-0.5 hover:shadow-lg hover:bg-blue-700 active:bg-blue-800 transition-all disabled:opacity-60 font-oswald disabled:cursor-not-allowed"
            >
              <CheckCircle2 className="size-5 mr-2" />
              Ich stimme zu und sende Anfrage
            </button>
            
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="privacy-accept"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="size-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
              />
              <label htmlFor="privacy-accept" className="text-sm text-slate-600 font-oswald">
                Ich habe die Datenschutzerklärung gelesen und stimme zu
              </label>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="mt-3 text-sm text-slate-500 hover:text-slate-700 font-oswald transition-colors"
          >
            Abbrechen
          </button>
        </div>
      </div>
    </div>
  )
}
