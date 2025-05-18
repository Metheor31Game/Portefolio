import Image from "next/image";

interface LieuCardProps {
  lieu: string;
  image: string;
  description: string;
}

export function LieuCard({ lieu, image, description }: LieuCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border-2 border-indigo-700 bg-white shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={lieu}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-xl font-bold text-gray-900">{lieu}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
