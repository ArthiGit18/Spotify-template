import { Box } from "@mui/material";
import SearchData from '../data/searchData.json';
import Footer from "../pages/footerSection";

const SearchBox = () => {

    return (
        <div className="searchBox">
            <div className="search_Main_bg_scroll">
                <h4 style={{ margin: "30px 0", fontSize: "25px" }}>Browse all</h4>
                <Box className="search_section_box" >
                    {SearchData.searchItems.map((item, index) => (
                        <div className="search_boxes" style={{ backgroundColor: item.bgColor }} key={index}>
                            <h4>{item.title}</h4>
                            <img src={item.img} alt="cover" className="SearchListImg" />
                        </div>
                    ))}

                </Box>

                <Footer />
            </div>
        </div>
    );
}

export default SearchBox;
