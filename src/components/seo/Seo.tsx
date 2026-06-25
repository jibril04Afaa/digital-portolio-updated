import { useEffect } from "react";
import { setDocumentMetadata } from "../../lib/metadata";

type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
};

export function Seo(props: SeoProps) {
  useEffect(() => {
    setDocumentMetadata(props);
  }, [props.title, props.description, props.image]);

  return null;
}
