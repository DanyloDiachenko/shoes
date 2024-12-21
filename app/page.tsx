import { HomePageComponent } from "@/components/pageComponents/Home";
import { getCategories } from "./api/categories";

const Home = async () => {
    const categories = await getCategories();

    return <HomePageComponent categories={categories} />;
};

export default Home;
