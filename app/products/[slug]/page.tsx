import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Heart, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export default function ProductPage({ params }: { params: { slug: string } }) {
  // This would normally fetch product data based on the slug
  const product = {
    name: "Organic Cotton Essential Tee",
    price: 95,
    description: "Our signature tee made from 100% organic cotton. Soft, breathable, and sustainable.",
    details: "Made with 100% GOTS certified organic cotton. Features a relaxed fit, crew neck, and short sleeves.",
    colors: ["Black", "White", "Sage", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/placeholder.svg?height=800&width=600&text=Product+Front",
      "/placeholder.svg?height=800&width=600&text=Product+Side",
      "/placeholder.svg?height=800&width=600&text=Product+Back",
      "/placeholder.svg?height=800&width=600&text=Product+Detail",
    ],
    materials: "100% Organic Cotton",
    care: "Machine wash cold, tumble dry low",
    sustainability: "Made with organic materials. Carbon neutral production. Water conservation practices.",
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Breadcrumbs */}
      <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-black">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/products" className="hover:text-black">
          Products
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-black">{product.name}</span>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        {/* Product Images */}
        <div className="grid gap-4">
          <div className="overflow-hidden">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              width={800}
              height={1000}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.slice(1, 4).map((image, index) => (
              <div key={index} className="overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 2}`}
                  width={300}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="font-serif text-2xl font-light md:text-3xl">{product.name}</h1>
          <p className="mt-2 text-xl">${product.price}</p>

          <div className="mt-6">
            <h3 className="mb-2 text-sm font-medium">Color</h3>
            <div className="flex gap-2">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className={`h-10 w-10 rounded-full border ${
                    index === 0 ? "border-black ring-1 ring-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.toLowerCase() === "sage" ? "#c2cbb8" : color.toLowerCase() }}
                  aria-label={color}
                />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="mb-2 text-sm font-medium">Size</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className={`flex h-10 min-w-[40px] items-center justify-center rounded-full border px-3 ${
                    index === 2 ? "border-black bg-black text-white" : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <Link href="/size-guide" className="mt-2 inline-block text-sm underline">
              Size Guide
            </Link>
          </div>

          <div className="mt-8 flex gap-4">
            <Button className="flex-1 rounded-full bg-black text-white hover:bg-black/90">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Add to Bag
            </Button>
            <Button variant="outline" size="icon" className="h-12 w-12 rounded-full border-gray-300">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Add to Wishlist</span>
            </Button>
          </div>

          <Separator className="my-8" />

          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-transparent">
              <TabsTrigger
                value="description"
                className="data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                value="details"
                className="data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Details
              </TabsTrigger>
              <TabsTrigger
                value="sustainability"
                className="data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Sustainability
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <p className="text-gray-700">{product.description}</p>
              <p className="mt-4 text-gray-700">
                Uncover your bliss with our essential pieces designed for comfort and sustainability.
              </p>
            </TabsContent>
            <TabsContent value="details" className="mt-4">
              <div className="grid gap-4">
                <p className="text-gray-700">{product.details}</p>
                <div>
                  <h4 className="font-medium">Materials</h4>
                  <p className="text-gray-700">{product.materials}</p>
                </div>
                <div>
                  <h4 className="font-medium">Care</h4>
                  <p className="text-gray-700">{product.care}</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="sustainability" className="mt-4">
              <p className="text-gray-700">{product.sustainability}</p>
              <p className="mt-4 text-gray-700">
                At Elystra, we believe that sustainable fashion is the path to uncovering your bliss while preserving
                our planet.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Recommended Products */}
      <section className="mt-16">
        <h2 className="mb-8 text-center font-serif text-2xl font-light">Complete Your Look</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <Link href={`/products/recommended-${item}`} key={item} className="group">
              <div className="overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=600&width=500&text=Product+${item}`}
                  alt={`Recommended product ${item}`}
                  width={500}
                  height={600}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-sm">Organic Cotton Essentials</h3>
                <p className="mt-1 text-sm">$95</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

