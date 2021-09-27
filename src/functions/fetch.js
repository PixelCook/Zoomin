import axios from "axios";

const fetchData = async (url) => {
    try{
        const response = await axios.get(url)
        return response
    }catch(error) {
      console.log('Looks like there was a problem: \n', error);
    };
}

export default fetchData;