// pages/api/upload.js
// pages/api/upload.js
// import { writeFile } from 'fs/promises';
// import { NextResponse } from 'next/server';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const formData = req.formData();
//       const file = formData.get('file');

//       if (!file) {
//         return res.json({ message: 'No file found', success: false });
//       }

//       const byteData = await file.arrayBuffer();
//       const buffer = Buffer.from(byteData);
//       const path = `./public/uploads/${file.name}`;

//       await writeFile(path, buffer);

//       return res.json({ message: 'File uploaded successfully', success: true });
//     } catch (error) {
//       console.error('Error during file upload:', error);
//       return res.json({ message: 'Error during file upload', success: false });
//     }
//   } else {
//     return res.status(405).json({ message: 'Method not allowed', success: false });
//   }
// }
