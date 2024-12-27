import React, { useState } from "react"
import Container from '../../../component/container/index';
import { color } from "../../../constant/colors";
import Card from "../../../component/card";
import FormSelect from "../../../component/form/select";
import FormNormal from "../../../component/form/normal";
import FormNumber from "../../../component/form/number";
import FormWithIcon from "../../../component/form/icon";
import { FaSearch } from 'react-icons/fa';

const FormContainer: React.FC = () => {
    const [search, setSearch] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];
    
    return (
        <Container
            width="100%"
            height="auto"
            padding="2rem"
            margin="0"
            backgroundColor={ color.white }
        >
            <Card
                className="example-card"
            >
                <FormNormal />
                <FormNumber />
                <FormWithIcon
                    label="Search"
                    placeholder="Search something..."
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    icon={<FaSearch />}
                    iconPosition="left"
                />
                <FormSelect
                    label="Choose an Option"
                    options={options}
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                />
            </Card>
        </Container>
    )
}

export default FormContainer