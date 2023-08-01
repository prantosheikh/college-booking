import CollegeImageGallery from "../CollegeImageGallery/CollegeImageGallery";
import Header from "../Header/Header";
import ReviewSection from "../ReviewSection/ReviewSection";
import CollegeSection from "../collegeSection/collegeSection";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <CollegeSection></CollegeSection>
            <CollegeImageGallery></CollegeImageGallery>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;