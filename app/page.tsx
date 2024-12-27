import { HomePageComponent } from "@/components/pageComponents/Home";


const Home = async () => {
    const categories = await getCategories();

    return <HomePageComponent categories={categories} />;
};

export default Home;
