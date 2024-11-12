import React from 'react';
import './BlogSection.css';

const blogPosts = [
  {
    id: 1,
    category: 'Design',
    title: 'UX review presentations',
    description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    author: {
      name: 'Olivia Rhye',
      image: 'https://s3-alpha-sig.figma.com/img/27a8/497d/5cb712a39a846f3d49443b8283852dca?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EKfHNGUui5-oHYRCpFswG9-ncfmHdTBTZ~WurZqw2t8GmlEgr-z3Kba65BuoOy7QdP7vVgz8C8~X1C6iweFj0cjm-jqPbe1UoiTF-dTlFjeux7l5sBn5sR~EL5T8G9Snn~LORyOkSFxlTBagTgBk7qyub8AHKeB8BLX4Hpw9c4JAxQ23tjxnFNT8vR95VRQU6oVVU1rYcsLgRDG2ESzHehOb5v2HRA04oYWed9fLBYg4xovGCxOh~cYPInaAmfauW5i8BvkyQk8hy2JvpbyPwOebujJGOrloo521qyzPKjIVQLWGsxgIhR86DrzIA~CNJP~L-u4dZoSCIjERtX82RA__', // Replace with actual image path
    },
    date: '20 Jan 2024',
    image: 'https://s3-alpha-sig.figma.com/img/92f9/d44d/896aad9fd5981c841633a846ddb6994b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ModgNK0I63ChmIzdUE-9Itiuk2Qh97~Yd0PxrI7iNaQfSyuLKGRkb1471d9uCTlFxlFdzM2Ibyv39vOYB8vrUqE6V5sJZvvYIxGy45mzd1lZn849iBqMXgAykkUQx6QRZSw13Pw9fLPFwdxSI7~zGl2m9IsPWyHKz6CgB6mKIq2Sfbh5dcu7IiVQPF5ViFYZI1Fd0yP07CVXTuWkMCj3WtM5lHvYQMvSK0gxtCHi-t6oV9WteOn9ngRV5pyPc4S9Yc-9XGnSb~cL~kIstRJQiSf5FL1PIIHxDoolNWx7JCLG4hjCYLip3NmE55274NyTTQ0Oi4YKnrjHnzV6XlVyeQ__', // Replace with actual image path
  },
  {
    id: 2,
    category: 'Product',
    title: 'Migrating to Linear 101',
    description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
    author: {
      name: 'Phoenix Baker',
      image: 'https://s3-alpha-sig.figma.com/img/1173/f077/5d4f6c2c6c7caf725e2ec6d6ed6aca1d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lKz0hKiGvAAmbq7pPQTFeZ3Yn4bvXrNKXAyHEmtqUrdcE2UmirQDAp2yi9mxDD7Rz0Z9bPPX5cabl3ykEaXq8Yg860o74VYeYsr75ju2RsLZGkpkiksCUOqx~9JC6uPUYSlH2KSOo8oA4g~I9cvu3kVGJFhGYdlzNbdN2Fke66zXF6AAzc4aUGvHPPghsStaRtwz57MFp115S6AK-Gq9yA9Ge1hqobYIyrhyA69g-U02ngmPvwuK1qttv2uiDzuEgGYtwJBfutOusADeYFX1h-qrzdOZLPngt93uvimASm3XsCCU~Uegwm1Xkj6a4c5qSajlPx~4DhC3pvheIQEArw__', // Replace with actual image path
    },
    date: '19 Jan 2024',
    image: 'https://s3-alpha-sig.figma.com/img/a4c5/2ab3/a3c522719b54dd45b1795921034a3f00?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XaAEFOVQxfZeu4~JdAchAwmpYf9BIjeYUGGBV9K-8Vmn8O9Y8H-qM~kF4ta~Z3MOlOEqsGYVnwNCVFRdJJa7PP8AWIn5BCtZaYaYe3iL1K6bMckZKILygt0gBQSGKWmU~80WitQQtFQm1cmXVsS3Yq9L9dtkoTPL~Yom97A4egnapq-aa2tTLlRtjw3tRUn4w2mLyGAn6ODFITyDUjhomg7ud~EPleIfA3-Doqgn5qf2ZBh6L1-mALbQb3R8C~IodiNyaJn0ejratrd~2QI7FMT5-APMmiC6DYzTwZ8bMU8kdI~XKzJOJGFfEczRLCsEwyzxTLhygv~jcSMFxOaSkg__', // Replace with actual image path
  },
  {
    id: 3,
    category: 'Software Engineering',
    title: 'Building your API stack',
    description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
    author: {
      name: 'Lana Steiner',
      image: 'https://s3-alpha-sig.figma.com/img/572a/6183/892ca2df6e032e2c3c86f59b0f2caa70?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VqPfoQGdITof2aVVJizjJW9hLKOcrNeJ~bSxOl5Oj~MUCtJbOt0scaSuD0ZslkFiEJj4OVSXLD~u4un66-1kyHJG-NXUzBktJCbwpA3dB5GpwKrakrqTflUqS4E2gHEMcg66wsO95~U-5my9FrtqURzqrs5P5oSPg8AyWIA670DQNZMIQ1r-3ESkVsjxXC~zWoAJttaE2Fs8Hf4JpDkBuANNrDI3FMn1jZ7qoBIoq~a2OgrQwzgdSCUOmedggVL-Juj9wlvJsq78pl0kI-nfcoWetTA7qUm2vta7vwgh7C4XFwtoW1jQNeM43s4F~AdWwC3Ej5dp~HH6lEyYr4jzgA__', // Replace with actual image path
    },
    date: '18 Jan 2024',
    image: 'https://s3-alpha-sig.figma.com/img/e2d0/7def/1dbd591c5182a37dfedc9ff110ae94d9?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KnCN5r4TMvkJJQqCACKJHPb1IePig-qNAeH5qU-jSC5OEbC9-TO7VljgdawrT~a3DDspuD7MOz~-zagoEs~iT2J4IQDnfkDNGVyiwr5fCz7aXhHm8nfKGoheyRGTIlmZB-DdooL~7w-pflgeHj0ov-64UxtD8dv6pxdQ1446p1OeGliaEKzaSxeQSTsDxSMGGi4xF5qJNOion0xXT9-ehwF0Al5Bp3kmC2g4omn5i-Y6rm2SVyRE57swwcE5AJEJVpZsmP2zhnjqabwUkgyN2rJ1ofArs6Pkjw7-AGdK0Clu54oBqUlTXT66~jqhWzsUjb-vA8N2v2iM-0KqfqeUZQ__', // Replace with actual image path
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <p className="subheading">Our blog</p>
        <h1 className="heading">Latest blog posts</h1>
        <p className="description">
          Tool and strategies modern teams need to help their companies grow.
        </p>
        <button className="view-all-btn">View all posts</button>
      </div>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

const BlogPost = ({ post }) => (
  <div className="blog-post">
    <img src={post.image} alt={post.title} className="post-image" />
    <p className="category">{post.category}</p>
    <h2 className="post-title">{post.title}</h2>
    <p className="post-description">{post.description}</p>
    <div className="author">
      <img src={post.author.image} alt={post.author.name} className="author-image" />
      <div className="author-info">
        <p className="author-name">{post.author.name}</p>
        <p className="post-date">{post.date}</p>
      </div>
    </div>
  </div>
);

export default BlogSection;
