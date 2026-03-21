import { createUser } from "../../features/auth/authService";
import { createBudget } from "../../features/budget/budgetService";
import { createCategory } from "../../features/category/categoryService";
import { createTransaction } from "../../features/transactions/transactionService";

export const seedDB = async () => {
  const userId = await createUser({
    email: "user@gmail.com",
    name: "Nguyen Van A",
    createdAt: new Date(),
  });

  const categoryId = await createCategory({
    userId,
    name: "Food",
    type: "expense",
  });

  await createBudget({
    userId,
    categoryId,
    limit: 2000000,
    month: "2026-03",
  });

  await createTransaction({
    userId,
    title: "Lunch",
    amount: 50000,
    categoryId,
    date: new Date(),
    note: "Lunch with friends",
    createdAt: new Date(),
  });

  console.log("seed done");
};
