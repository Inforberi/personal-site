import { cn } from "@/utils/cn";

const LoadingTodos = () => {
  const loadingItems = new Array(6).fill(null);

  return (
    <ul
      className={cn(
        "grid auto-rows-auto grid-cols-1 gap-5",
        "sm:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))]",
        "xl:gap-7",
        "2xl:gap-8",
      )}
    >
      {loadingItems.map((_, index) => (
        <li
          key={index}
          className={cn(
            "inline-grid grid-cols-1 grid-rows-[auto_1fr_auto] rounded-2xl border border-black bg-white p-5 dark:border-transparent",
            "sm:border-2",
            "xl:p-6",
            "2xl:p-7",
          )}
        >
          <button
            title="Задача не завершена"
            aria-label="Задача не завершена"
            className={cn(
              "mb-5 flex items-center gap-2",
              "sm:mb-6",
              "xl:mb-7",
              "2xl:mb-8",
            )}
            disabled
          >
            <span
              className={cn(
                "h-7 w-8 animate-pulse rounded-full bg-gray-300",
                "sm:h-8 sm:w-9",
                "xl:h-9 xl:w-10",
                "xl:h-10 xl:w-11",
              )}
            ></span>
            <span
              className={cn("h-5 w-32 animate-pulse rounded-lg bg-gray-200")}
            ></span>
          </button>
          <div
            className={cn(
              "mb-5 min-h-16 w-full animate-pulse rounded-xl bg-gray-300",
              "sm:mb-8",
              "lg:mb-10",
              "xl:mb-14",
              "2xl:mb-16",
            )}
          ></div>
          <div className="ml-auto flex gap-3">
            <button
              className={cn(
                "h-10 w-12 animate-pulse rounded-2xl bg-gray-300",
                "sm:w-14",
                "2xl:h-12 2xl:w-16",
              )}
              disabled
              aria-label="Загрузка..."
            ></button>
            <button
              className={cn(
                "h-10 w-12 animate-pulse rounded-2xl bg-gray-300",
                "sm:w-14",
                "2xl:h-12 2xl:w-16",
              )}
              disabled
              aria-label="Загрузка..."
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LoadingTodos;
