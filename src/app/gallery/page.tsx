import Image from 'next/image';

const GalleryPage = () => {
  return (
    <div className="my-8">
      <h1 className="text-center text-blue-600 font-bold text-3xl mt-3">
        Image Optimization
      </h1>

      <div className="pt-8">
        <Image
          src="https://cdn.pixabay.com/photo/2020/04/18/06/34/man-5057800_1280.jpg"
          alt="boy picture"
          className="mx-auto"
          width={700}
          height={700}
        />
      </div>
    </div>
  );
};

export default GalleryPage;
