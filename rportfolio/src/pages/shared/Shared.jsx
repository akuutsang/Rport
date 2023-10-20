// // export const url =
// //   "https://docs.google.com/document/d/1hYSDhKSCujhDk3K-xWhRV8R1hATXXX_pQToQRgc0DEU/";
// import { useEffect, useState } from "react";

// export default function Shared() {
//   const [resume, setResume] = useState();

//   useEffect(() => {
//     const url =
//       "https://docs.google.com/document/d/1hYSDhKSCujhDk3K-xWhRV8R1hATXXX_pQToQRgc0DEU/";
//     fetch(url)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         setResume(data.resume);
//       });
//   }, []);

//   return;
// }

import React from "react";

export default function Shared() {
  return (
    <div className="Shared">
      <iframe
        src="https://docs.google.com/document/d/1hYSDhKSCujhDk3K-xWhRV8R1hATXXX_pQToQRgc0DEU/preview"
        width="100%"
        height="500"
      ></iframe>
    </div>
  );
}
