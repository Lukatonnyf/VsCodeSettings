import HomePage from "./(home)/homePage";

export default async function sitemap() {
    // biome-ignore lint/correctness/noInvalidUseBeforeDeclaration: <explanation>
    const HomePage = await HomePage()
    
}