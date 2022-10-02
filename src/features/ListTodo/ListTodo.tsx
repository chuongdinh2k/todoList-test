import {useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import AppButton from "../../components/AppButton/AppButton";
import AppInput from "../../components/AppInput/AppInput";
import { resultSearchListByName } from "../../components/helper";
import {
  LABEL_BTN_DONE,
  LABEL_BTN_REMOVE,
  PLACEHOLDER_SEARCH_INPUT,
} from "../../configs/constant";
import { useAppSelector } from "../../redux";
import {
  removeMultipleWork,
  removeWork,
  selectListTodo,
  updateWork,
} from "../../redux/slices/listTodo";
import { theme } from "../../themes";
import { ItemWork } from "./components";
import { EditForm } from "./EditForm";

export const ListTodo = () => {
  // redux states
  const { listTodo } = useAppSelector(selectListTodo);
  // component states
  const [searchValue, setValueSearch] = useState<string>("");
  const [listFilterTodo, setListFilterTodo] = useState<any[]>([]);
  const [detail, setDetail] = useState<any>();
  const [selectedHomeWork, setSelectedHomeWork] = useState<any[]>([]);

  // hooks
  const dispatch = useDispatch();
  // functions
  const handleOnChangeSearch = (e: any) => {
    const { value } = e.target;
    setValueSearch(value);
    setListFilterTodo(resultSearchListByName(value, listTodo));
    setDetail("");
  };
  const handleOnRemoveWork = (id: any) => {
    dispatch(removeWork(id));
    setListFilterTodo(listFilterTodo.filter((item) => item.id !== id));
    setSelectedHomeWork(listFilterTodo.filter((item) => item.id !== id));
    setDetail("");
  };
  const viewDetail = (id: any) => {
    setDetail(listTodo.filter((item) => item.id === id));
  };
  const updateDetail = (values: any) => {
    dispatch(updateWork(values));
    toast.success("updated work successfully!");
  };
  const handleOnSelectHomeWork = (id: any) => {
    const findIndex = selectedHomeWork.findIndex((item) => item === id);
    if (findIndex <= -1) {
      setSelectedHomeWork([...selectedHomeWork, id]);
    } else {
      setSelectedHomeWork(selectedHomeWork.filter((item) => item !== id));
    }
  };
  const handleRemoveMultipleWork = () => {
    dispatch(removeMultipleWork(selectedHomeWork));
    setSelectedHomeWork([]);
    setDetail("");
  };
  return (
    <StyledEditForm>
      <p className="title">To do List</p>
      <div className="wrapForm">
        <AppInput
          placeholder={PLACEHOLDER_SEARCH_INPUT}
          value={searchValue}
          handleOnChange={handleOnChangeSearch}
        />
        {!!detail?.length && (
          <div className="wrapForm__edit">
            <ItemWork
              checked
              data={detail[0]}
              onRemove={() => handleOnRemoveWork(detail[0].id)}
              onSelect={() => setDetail("")}
            />
            <EditForm data={detail} handleSubmit={updateDetail} />
          </div>
        )}
        <div className="wrapList">
          {!!searchValue
            ? listFilterTodo?.map((item) => (
                <ItemWork
                  key={item.id}
                  data={item}
                  onRemove={() => handleOnRemoveWork(item.id)}
                  onView={() => viewDetail(item.id)}
                  onSelect={() => handleOnSelectHomeWork(item.id)}
                />
              ))
            : listTodo?.map((item) => (
                <ItemWork
                  key={item.id}
                  data={item}
                  onRemove={() => handleOnRemoveWork(item.id)}
                  onView={() => viewDetail(item.id)}
                  onSelect={() => handleOnSelectHomeWork(item.id)}
                />
              ))}
        </div>
      </div>
      {!!selectedHomeWork?.length && (
        <div className="bulk">
          <p className="bulk__title">Buik Action: </p>
          <div className="bulk__action">
            <AppButton
              text={LABEL_BTN_DONE}
              btnStyle={{ backgroundColor: theme.colors.blue }}
            />
            <AppButton
              text={LABEL_BTN_REMOVE}
              btnStyle={{ backgroundColor: theme.colors.error }}
              className="btnRemove"
              handleOnClick={handleRemoveMultipleWork}
            />
          </div>
        </div>
      )}
    </StyledEditForm>
  );
};

const StyledEditForm = styled.div`
  padding-top: 20px;
  border: 1px solid ${(p) => p.theme.colors.black};
  min-height: 100vh;
  .title {
    font-size: 20px;
    font-weight: 600;
  }
  .wrapForm {
    padding: 20px;
    &__edit {
      padding: 20px;
      margin-top: 10px;
      border: 1px solid ${(p) => p.theme.colors.black};
    }
  }
  .bulk {
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    background-color: ${(p) => p.theme.colors.backgroundColor};
    column-gap: 10px;
    &__action {
      display: flex;
    }
  }
  .btnRemove {
    margin-left: 10px;
  }
`;
