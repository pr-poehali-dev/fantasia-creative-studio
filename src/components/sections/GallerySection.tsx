export default function GallerySection() {
  const galleryImages: string[] = [];

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Наша галерея
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Атмосфера нашей студии
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
            >
              <img 
                src={image} 
                alt={`Галерея ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}