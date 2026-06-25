import { siteSeo } from "../config/seo";

type Metadata = {
  title?: string;
  description?: string;
  image?: string;
};

export function setDocumentMetadata(metadata: Metadata) {
  const title = metadata.title ? `${metadata.title} | Jibril Afaa` : siteSeo.title;
  const description = metadata.description ?? siteSeo.description;
  const image = metadata.image ?? siteSeo.image;

  document.title = title;
  setMeta("description", description);
  setMeta("og:title", title, "property");
  setMeta("og:description", description, "property");
  setMeta("og:image", image, "property");
}

function setMeta(name: string, content: string, attribute: "name" | "property" = "name") {
  let element = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.content = content;
}
