
import Link from "next/link";

export function Footer() {
 
    return (
        <footer className="bg-slate-900 border-t border-slate-700 text-slate-300 py-10 pb-4">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Sobre o Blog */}
                <div>
                    <h3 className="text-xl font-semibold text-cyan-400 pb-2">The Code Talker Blog</h3>
                    <p className="text-slate-400 text-sm">
                        Explorando o futuro da tecnologia, programação e inovação digital.
                    </p>
                </div>

                {/* Links Rápidos */}
                <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Links Rápidos</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-cyan-300 transition">Início</Link></li>
                        <li><Link href="/sobre" className="hover:text-cyan-300 transition">Sobre</Link></li>
                        <li><Link href="/contato" className="hover:text-cyan-300 transition">Contato</Link></li>
                        <li><Link href="/privacy"className="hover:text-cyan-300 transition">Política de Privacidade</Link></li>
                        <li><Link href="/termos" className="hover:text-cyan-300 transition">Termos de Uso</Link></li>
                    </ul>
                </div>

                {/* Redes Sociais */}
                <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Siga-nos</h4>
                    <div className="flex flex-col space-y-2 text-sm">
                        <Link href="https://github.com/trsmrs" target="_blank" className="hover:text-cyan-300 transition">💻 GitHub</Link>
                        <Link href="https://www.linkedin.com/in/trsmtiago" target="_blank" className="hover:text-cyan-300 transition">🔗 LinkedIn</Link>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="mt-8 border-t border-slate-700 pt-4 text-center text-xs text-slate-500">
                &copy; 2025 The Code Talker Blog - Todos os direitos reservados.
            </div>
        </footer>
    )
}