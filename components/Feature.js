import { storyblokEditable } from "@storyblok/react";
import Link from "next/link"

const Feature = ({ blok }) => {
  
  return(<a href={blok.Link.cached_url} className="column feature" {...storyblokEditable(blok)}>
    {blok.name}
  </a>
  )
};

export default Feature;
