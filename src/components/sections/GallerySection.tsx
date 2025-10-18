export default function GallerySection() {
  const galleryImages = [
    'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/e2e4b534-46b0-4a0e-a8b4-53da651037f0.jpg',
    'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/489b04d9-6bc9-4832-9a54-3cfb10ec9e0c.jpg',
    'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/8488764d-c92a-4eff-9805-0147a4749e63.jpg',
    'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/9a0c554d-6588-423e-a8f1-3ef08241a441.jpg',
    'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/3f606823-6693-4c86-aae7-69b00d3a1e4d.jpg'
  ];

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