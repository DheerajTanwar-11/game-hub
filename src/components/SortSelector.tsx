import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { GameQuery } from "../App";

interface Props {
	onSelect: (sortOrder: string) => void;
	gameQuery: GameQuery;
}

const SortSelector = ({ onSelect, gameQuery }: Props) => {
	const sortOrders = [
		{ label: "Relevance", value: "relevance" },
		{ label: "Date added", value: "-added" },
		{ label: "Name", value: "name" },
		{ label: "Release date", value: "-released" },
		{ label: "Popularity", value: "-metacritic" },
		{ label: "Average rating", value: "-rating" },
	];

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order by:{" "}
				{
					sortOrders.find(
						(sortOrder) => sortOrder.value === gameQuery.sortOrder
					)?.label
				}
			</MenuButton>
			<MenuList>
				{sortOrders.map((sortOrder) => (
					<MenuItem
						key={sortOrder.value}
						onClick={() => onSelect(sortOrder.value)}
					>
						{sortOrder.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
