Usage
import Image,LoadBuffer and your Data

import Image from "next/image";
import LoadBuffer from "@/components/GlobalComponents/LoadBuffer/LoadBuffer"; // Import the function
import data from "./Base6Image";

<!-- notes : data should be like this
data = ["yourImagesBuffer","yourImagesBuffer"] -->

in Return part
<Image
src={LoadBuffer(base64Image, 0) as string}
alt="Base64 Image"
width={0}
height={0}
className="w-100 h-[100%] object-cover rounded-none md:rounded-[1%]"
/>
