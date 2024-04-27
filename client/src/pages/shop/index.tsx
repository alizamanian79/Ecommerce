import React from 'react'
import ShopComponent from '@/components/Shop/Layout'

interface SHOPIF {
  data?:undefined | any[]
}

const Shop:React.FC<SHOPIF>=({data})=> {
  return (
    <ShopComponent dataShop={data} />
  )
}
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.LOCALHOST}/api/products/list`)
  const data = await res.json()
 
  // Pass data to the page via props
  return { props: { data } }
}
export default Shop