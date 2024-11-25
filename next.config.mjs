import { withNextVideo } from "next-video/process";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // Disable React's strict mode
    images: {
        domains: [
            'bizweb.dktcdn.net',
            'encrypted-tbn0.gstatic.com',
            "media.istockphoto.com",
            "yoga.vn",
            "res.cloudinary.com",
            "images.pexels.com",
            "example.com",
            'bizweb.dktcdn.net',
            'encrypted-tbn0.gstatic.com',
            'dotapyogatot.com',
        ],
        dangerouslyAllowSVG: true,
    },

    output: 'export', // Chuyển sang static export
    assetPrefix: './', // Sử dụng đường dẫn tương đối

    trailingSlash: true, // Thêm dấu "/" vào cuối các URL

};

export default withNextVideo(nextConfig);

