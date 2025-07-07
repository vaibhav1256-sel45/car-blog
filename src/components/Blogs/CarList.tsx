// components/CardList.tsx
import { CarBlogPost } from "@/types/Cartypes";
import Card from "./Card";

type CardListProps = {
  cards: CarBlogPost[];
  visibleCount: number;
};

export default function CardList({ cards, visibleCount }: CardListProps) {
  return (
    <div className="flex flex-col gap-8 mb-5">
      {cards.slice(0, visibleCount).map((card, idx) => (
        <Card key={idx} {...card} />
      ))}
    </div>
  );
}
