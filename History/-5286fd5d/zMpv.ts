import HomePage from "@/app/(home)/homePage"; // ✅ Caminho correto

export default async function sitemap() {
    const HomePage = await HomePage();
    console.log(HomePage); // Apenas para testar se está importando corretamente
}
