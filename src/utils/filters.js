import {categories} from "./categories"
export const filterByPhone = (users = [], phoneNumber) => {
    return users.filter(user => user.phone === phoneNumber)
}

export const filterByCategory = (users = [], categoryName = "") => {
    return users.filter(user => user.categoryId === categories.find(category => category.id === user.categoryId).id);
}

export const sortByAvaliation = (users = [], order = "desc") => {
    return users.map(user => ({
        ...user,
        avgScore: user.avaliations.reduce((score, avaliation) => score + avaliation.score, 0)
    })).sort((user1, user2) => order === "desc" ? (user2.avgScore - user1.avgScore) : (user1.avgScore - user2.avgScore));
};