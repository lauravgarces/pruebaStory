import { storyblokEditable } from "@storyblok/react";
import Link from "next/link"

const Feature = ({ blok }) => {
  
  return(<Link href={blok.Link.cached_url} className="column feature" {...storyblokEditable(blok)}>
    {blok.name}
  </Link>
  )
};

export default Feature;
