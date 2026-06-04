import { useState, useEffect } from "preact/hooks";

const randomCatUrl = () => `https://cataas.com/cat?width=900&height=700&ts=${Date.now()}`;

export default function CatGallery() {
    const [catPicture, setCatPicture] = useState('#')
    const newpicture = () => {
        setCatPicture(randomCatUrl())
    }
    useEffect(() => {
        newpicture();
    }, [])
    return (
      <button class='flex flex-col justify-center items-center w-full h-full bg-contain bg-center bg-no-repeat rounded-b-md' style={{backgroundImage: `url("${catPicture}")`}} onClick={() => {
        newpicture();
      }}/>
    )
}
