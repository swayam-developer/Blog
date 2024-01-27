// "use client"
// import next from '../../public/next.svg'
// import styles from './page.module.css'
// import { useState } from 'react'

// export default function Home() {

//   const [file, setFile] = useState()
//   const onsubmit = async (e) => {
//     e.preventDefault();
//     console.log(file);
//     const data = new FormData();
//     data.set('file', file);
//     const result = await fetch("@/upload" , {
//       method: 'POST',
//       body: data
//     });
//     console.log(result);
//   }
  
//   return (
//     <main className={styles.main}>
//       <div>
//         <h1>Upload Images</h1>
//         <form onSubmit={onsubmit} >
//           <input
//             type='file'
//             name='file'
//             onChange={(e) => setFile(e.target.files?.[0])}
//           />
//           <button type='submit'>Upload</button>
//         </form>
//       </div>
//     </main>
//   )
// }


// pages/index.js
// "use client"
// import { useState } from 'react';

// export default function Home() {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };

//   const handleUpload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('file', file);

//       const response = await fetch('/api/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         console.log('File uploaded successfully');
//       } else {
//         console.error('File upload failed:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error during file upload:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>File Upload</h1>
//       <main>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//       </main>
//     </div>
//   );
// }

// "use client"
// import Image from 'next/image'
// import vercel from '../../public/vercel.svg'
// import next from '../../public/next.svg'
// import styles from './page.module.css'
// import Link from 'next/link'
// import { useState } from 'react'

// export default function Home() {
//   const [file, setFile] = useState();

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const data = new FormData();
//       data.set('file', file);

//       const result = await fetch("http://localhost:3000/api/upload", {
//         method: 'POST',
//         body: data,
//       });

//       if (result.ok) {
//         console.log("File uploaded successfully");
//       } else {
//         console.error("Error uploading file:", result.statusText);
//       }
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   }

//   return (
//     <main className={styles.main}>
//       <div>
//         <h1>Upload Images</h1>
//         <form onSubmit={onSubmit} >
//           <input
//             type='file'
//             name='file'
//             accept='image/*'
//             onChange={(e) => setFile(e.target.files?.[0])}
//           />
//           <button type='submit'>Upload</button>
//         </form>
//       </div>
//     </main>
//   )
// }


