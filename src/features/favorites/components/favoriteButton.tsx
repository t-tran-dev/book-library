import type { FavoriteBook } from "../favoritesTypes";
import { useFavorites } from "../useFavorites";
import { HeartIcon } from "./heartIcon";
import { TrashIcon } from "./trashIcon";

type FavoriteButtonProps = {
  book: FavoriteBook;
  variant?: "toggle" | "remove";
};

export const FavoriteButton = ({
  book,
  variant = "toggle",
}: FavoriteButtonProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  const favorite = isFavorite(book.isbn);
  const isRemove = variant === "remove";

  return (
    <button
      type="button"
      className="button button-clear fav-btn"
      onClick={() => toggleFavorite(book)}
      aria-label={
        isRemove || favorite
          ? `Remove ${book.title} from favorites`
          : `Add ${book.title} to favorites`
      }
      aria-pressed={isRemove ? undefined : favorite}
    >
      {isRemove ? (
        <TrashIcon className="fav" aria-hidden="true" />
      ) : (
        <HeartIcon
          className="fav"
          fill={favorite ? "currentColor" : "none"}
          aria-hidden="true"
        />
      )}
    </button>
  );
};
