import commerce from '../lib/commerce'

export async function getStaticProps() {
    const merchant = await commerce.merchants.about()
    const {data: categories} = await commerce.categories.list()
    const {data: products} = await commerce.products.list()
}