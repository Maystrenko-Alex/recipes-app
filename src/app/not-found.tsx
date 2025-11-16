import { Button } from "@heroui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center gap-y-3">
      <h1 className="text-5xl">404</h1>
      <span className="text-2xl">Страница не найдена</span>
      <Button as={Link} color="primary" href="/">
        Вернуться на главную
      </Button>
    </div>
  );
};

export default NotFound;
