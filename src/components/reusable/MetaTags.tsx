import Head from "next/head";

const MetaTags = () => {
  return (
    <Head>
      <title>Avatown - The Premium Marketplace for Avatars</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Avatown is an online marketplace for premium avatars."
      />
      <meta name="keywords" content="avatown, premium, avatars, marketplace" />
      <meta name="author" content="Jihan Jasper Al-rashid" />
      <meta name="robots" content="index, follow" />
      <meta
        property="og:title"
        content="Avatown - The Premium Marketplace for Avatars"
      />
      <meta
        property="og:description"
        content="Avatown is an online marketplace for premium avatars."
      />
      {/* <meta
        property="og:image"
        content="https://yourdomain.com/your-image.jpg"
      /> */}
      <meta property="og:url" content="https://avatown.jaspercode.com" />
      <meta property="og:type" content="website" />
      <meta
        name="twitter:title"
        content="Avatown - The Premium Marketplace for Avatars"
      />
      <meta
        name="twitter:description"
        content="Avatown is an online marketplace for premium avatars."
      />
      {/* <meta
        name="twitter:image"
        content="https://yourdomain.com/your-image.jpg"
      /> */}
      {/* <meta name="twitter:card" content="summary_large_image" /> */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default MetaTags;
