export default function GallerySection() {
  const galleryImages = [
    'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/e19f7bb7-f6df-4d4b-8d48-27fbe6d49b93.jpg',
    'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/7d757fdc-9175-4a8c-b19f-510d6e1a9cad.jpg',
    'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/bd5cd844-7f5b-4f36-bfce-7d72f79c2896.jpg',
    'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/afe7e5b6-3097-4f94-8b33-80e8edd50c13.jpg',
    'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/8ed767ef-9dfd-4919-88a1-f1260858af1e.jpg',
    'https://cdn.poehali.dev/projects/bdde1fd2-cbd4-4bf0-bfd7-fe42f02ad620/files/9659286b-b246-4766-8cc8-e464af63770c.jpg'
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
