import { motion } from "framer-motion";
import { routes } from "../app/routes";
import { Seo } from "../components/seo/Seo";
import { Button } from "../components/ui/Button";

export function NotFoundPage() {
  return (
    <>
      <Seo title="Not Found" description="The requested page could not be found." />
      <section className="mx-auto flex max-w-3xl flex-col items-start px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-mono text-sm font-black uppercase text-solder">404</p>
          <h1 className="mt-3 text-4xl font-black text-wafer">This trace does not connect.</h1>
          <p className="mt-4 leading-7 text-muted">
            The page you are looking for is unavailable or has moved.
          </p>
          <Button to={routes.home} className="mt-8">
            Return home
          </Button>
        </motion.div>
      </section>
    </>
  );
}
