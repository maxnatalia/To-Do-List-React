import Input from "../../Input";
import { Wrapper } from "./styled";
import searchQueryParamName from "../TasksList/searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from "../TasksList/searchParameters";

const Search = () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    )
}

export default Search;