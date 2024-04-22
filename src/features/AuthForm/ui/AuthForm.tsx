/* eslint-disable no-useless-escape */
import { KyrgyzLetters } from "@/shared/ui/KyrgyzLetters";
import {
  Button,
  DatePicker,
  Flex,
  Form,
  Input,
  type FormProps,
  Grid,
  App,
} from "antd";
import { MaskedInput } from "antd-mask-input";
import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { checkPin, validatePhone } from "../lib/validate";
import { IAbiturient } from "../types/types";
import dayjs from "dayjs";
import { isEmail } from "@/shared/lib/utils/validate/validateEmail";
import { CitizenshipSelect } from "@/entities/CitizenshipSelect";
import PassportSeriesSelect from "@/entities/PassportSeriesSelect/ui/PassportSeriesSelect";
import { EPassportSeries } from "@/entities/PassportSeriesSelect/model/types";
import axios, { AxiosError } from "axios";

const { useBreakpoint } = Grid;

type TStringValue = Record<string, string>;
const dateFormat = "DD.MM.YYYY";
const AuthForm = () => {
  const { message } = App.useApp();
  const { t } = useTranslation("RegisterPage");
  const authFormTranslate = useTranslation("RegisterPage", {
    keyPrefix: "form",
  });
  const errorMessageTranslate = useTranslation("RegisterPage", {
    keyPrefix: "errorMessages",
  });
  const utilsTranslate = useTranslation("utils");
  const [maskedInputsError, setMaskedInputErrors] = useState<
    Record<string, boolean>
  >({});
  const screens = useBreakpoint();

  const [form] = Form.useForm();
  const emailWatch = Form.useWatch("email", form);
  const citizenshipWatch = Form.useWatch("citizenship", form);
  const [name, setName] = useState<string>("name");
  const [lastName, setLastName] = useState<string>("surname");
  const [patronymic, setPatronymic] = useState<string>("patronymic");
  const [isEmailLoading, setIsEmailLoading] = useState<boolean>(false);
  console.log("citizenshipWatch", citizenshipWatch);

  const handleSubmit: FormProps<TStringValue>["onFinish"] = async (
    values: TStringValue
  ) => {
    console.log(values);
    try {
      const sendData = {
        ...values,
        dateGivenPas: dayjs(values.dateGivenPas).format(dateFormat),
      };
      const response = await axios.post(
        "https://dev.edu.gov.kg/vuz/api/register/abiturient",
        { ...sendData }
      );
      return response;
    } catch (error) {
      throw new Error(error as string);
    }
  };

  const handleFinishFailed: FormProps<TStringValue>["onFinishFailed"] = ({
    values,
  }: {
    values: TStringValue;
  }) => {
    for (const key in values) {
      if (!values[key]) {
        setMaskedInputErrors((prev) => ({
          ...prev,
          [key]: true,
        }));
      }
    }
  };

  const kyrgyzNameChange = (value: string) => setName(value);
  const kyrgyzLastNameChange = (value: string) => setLastName(value);
  const kyrgyzPatronymicChange = (value: string) => setPatronymic(value);
  const handleCitizenshipSelect = (value: boolean) => {
    form.setFieldsValue({
      citizenship: value,
    });
  };
  const handlePassportSeriesSelect = (value: EPassportSeries) => {
    form.setFieldsValue({
      serialPas: value,
    });
  };

  const handlePINChange = (value: string) => {
    form.setFieldsValue({
      pin: value,
    });
  };

  const showMessageSuccess = (value: string): void => {
    message.success(value);
  };

  const showMessageError = (value: string): void => {
    message.error(value);
  };

  const confirmEmail = async (email: string): Promise<void> => {
    setIsEmailLoading(true);
    try {
      const { data } = await axios.post(
        "https://dev.edu.gov.kg/vuz/api/email/verification",
        { email }
      );
      setIsEmailLoading(false);
      showMessageSuccess(data.message);
    } catch (error: unknown) {
      setIsEmailLoading(false);
      if (error instanceof AxiosError) {
        const errorMessage = error?.response
          ? error.response.data.message
          : utilsTranslate.t("unknownError");
        showMessageError(errorMessage);
      }
      throw new Error(error as string);
    }
  };

  const initialValues: IAbiturient = {
    surname: "Иванов",
    name: "Иван",
    patronymic: "Иванович",
    pin: "23103200650173",
    citizenship: 0,
    genderId: 0,
    serialPas: "AB",
    numberPas: "123456",
    dateGivenPas: dayjs(),
    sertificate: "123456789",
    phoneNumber: "+996(557)-120-820",
    email: "example@example.com",
    code: "1234",
    password: "",
    confirmPassword: "",
  };

  return (
    <Form
      className="flex flex-col"
      form={form}
      layout="vertical"
      scrollToFirstError
      onFinish={handleSubmit}
      initialValues={{ ...initialValues }}
      onFinishFailed={handleFinishFailed}
    >
      <Flex
        justify="space-between"
        gap={15}
        vertical={screens.xs}
        align="flex-start"
      >
        <Form.Item
          className="w-full"
          name={"citizenship"}
          label={authFormTranslate.t("citizenship")}
          required
          rules={[
            {
              required: true,
              message: errorMessageTranslate.t("citizenship"),
            },
          ]}
        >
          <CitizenshipSelect onCitizenshipChange={handleCitizenshipSelect} />
        </Form.Item>

        <Form.Item
          className="w-full"
          name={"pin"}
          label="ПИН/ИНН"
          required
          rules={[
            {
              required: true,
              message: "",
            },
            {
              validator: (_: unknown, value: string) =>
                checkPin(
                  _,
                  value,
                  handlePINChange,
                  errorMessageTranslate.t("PIN")
                ),
            },
          ]}
        >
          <MaskedInput
            className={`h-[40px] ${
              maskedInputsError.PIN && "border border-[#ff4d4f]"
            }`}
            mask={Number}
            placeholder={`${utilsTranslate.t("forExample")}: 23112202201234`}
            maxLength={14}
          />
        </Form.Item>
      </Flex>

      <Form.Item
        label={authFormTranslate.t("lastName")}
        name={"surname"}
        rules={[
          {
            required: true,
            message: errorMessageTranslate.t("lastName"),
          },
        ]}
      >
        <Flex align="center">
          <Input
            className="h-[40px] rounded-r-none border-r-0"
            placeholder={`${utilsTranslate.t(
              "forExample"
            )}: Асылбек уулу (кызы) / Асылбеков (-ва)`}
            onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
              setLastName(target.value)
            }
            value={lastName}
          />
          <KyrgyzLetters onChange={kyrgyzLastNameChange} value={lastName} />
        </Flex>
      </Form.Item>
      <Form.Item
        name={"name"}
        label={authFormTranslate.t("name")}
        rules={[
          {
            required: true,
            message: errorMessageTranslate.t("name"),
          },
        ]}
      >
        <Flex align="center">
          <Input
            className="h-[40px] rounded-r-none border-r-0"
            placeholder={`${utilsTranslate.t("forExample")}: Урмат`}
            onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
              setName(target.value)
            }
            value={name}
          />
          <KyrgyzLetters onChange={kyrgyzNameChange} value={name} />
        </Flex>
      </Form.Item>
      <Form.Item
        name={"patronymic"}
        label={authFormTranslate.t("patronymic")}
        required
        rules={[
          {
            required: true,
            message: errorMessageTranslate.t("patronymic"),
          },
        ]}
      >
        <Flex align="center">
          <Input
            className="h-[40px] rounded-r-none border-r-0"
            placeholder={`${utilsTranslate.t(
              "forExample"
            )}: Асылбекович (-вна)`}
            onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
              setPatronymic(target.value)
            }
            value={patronymic}
          />
          <KyrgyzLetters onChange={kyrgyzPatronymicChange} value={patronymic} />
        </Flex>
      </Form.Item>

      <Flex
        justify="space-between"
        gap={30}
        vertical={screens.xs}
        align={`${screens.sm ? "flex-end" : "flex-start"}`}
      >
        <Form.Item
          className="w-full"
          label={authFormTranslate.t("passport")}
          name={"serialPas"}
          required
          rules={[
            {
              required: true,
              message: errorMessageTranslate.t("passport"),
            },
          ]}
        >
          <Flex>
            <PassportSeriesSelect
              onPassportSeriesChange={handlePassportSeriesSelect}
            />
            <Form.Item
              className="w-full mb-0"
              name={"numberPas"}
              required
              rules={[
                {
                  required: true,
                  message: errorMessageTranslate.t("passport"),
                },
              ]}
            >
              <MaskedInput
                className={`h-[40px] rounded-l-none border-l-1 ${
                  maskedInputsError.passport && "border border-[#ff4d4f]"
                }`}
                mask={/^[a-zA-Z0-9]*$/}
                placeholder={`12345`}
                maxLength={9}
                minLength={7}
              />
            </Form.Item>
          </Flex>
        </Form.Item>

        <Form.Item
          className="w-full"
          label={authFormTranslate.t("dateOfIssuance")}
          required
          name={"dateGivenPas"}
          rules={[
            {
              required: true,
              message: errorMessageTranslate.t("dateOfIssuance"),
            },
          ]}
        >
          <DatePicker
            className="h-[40px] w-full"
            onChange={() => {}}
            format={dateFormat}
            placeholder="--/--/----"
          />
        </Form.Item>
      </Flex>

      <Flex
        justify="space-between"
        align="flex-start"
        vertical={screens.xs}
        gap={30}
      >
        <Form.Item
          className="w-full"
          name={"sertificate"}
          label={authFormTranslate.t("certificate")}
          required
          rules={[
            {
              required: true,
              message: errorMessageTranslate.t("certificate"),
            },
          ]}
        >
          <MaskedInput
            className={`h-[40px] ${
              maskedInputsError.sertificate && "border border-[#ff4d4f]"
            }`}
            mask={/^[0-9]*$/}
          />
        </Form.Item>
        <Form.Item
          className="w-full"
          name={"phoneNumber"}
          label={authFormTranslate.t("phone")}
          required
          rules={[
            {
              required: true,
              message: errorMessageTranslate.t("phone"),
            },
            {
              validator: (_: unknown, value: string) =>
                validatePhone(value, {
                  incorrectPhone: errorMessageTranslate.t("incorrectPhone"),
                  requiredPhone: errorMessageTranslate.t("requiredPhone"),
                }),
            },
          ]}
        >
          <MaskedInput
            className={`h-[40px] ${
              maskedInputsError.phoneNumber && "border border-[#ff4d4f]"
            }`}
            placeholder="+996(XXX)-XX-XX-XX"
            mask={"+996(000)-00-00-00"}
          />
        </Form.Item>
      </Flex>

      <Flex
        justify="space-between"
        align="flex-start"
        vertical={screens.xs}
        gap={30}
      >
        <Form.Item
          className="w-full"
          name={"email"}
          label={authFormTranslate.t("email")}
          rules={[
            {
              type: "email",
              message: errorMessageTranslate.t("email"),
            },
            {
              required: true,
              message: errorMessageTranslate.t("email"),
            },
          ]}
        >
          <Input
            className="h-[40px]"
            placeholder="Введите email"
            type="email"
          />
        </Form.Item>
        <Form.Item
          className="w-full"
          name={"code"}
          label={authFormTranslate.t("confirmEmail")}
          rules={[
            {
              required: true,
              message: errorMessageTranslate.t("confirmEmail"),
            },
            { pattern: /^[0-9]*$/, message: "Введите только числа" },
          ]}
        >
          <Flex>
            <Input
              className={`h-[40px] rounded-r-none border-r-1`}
              placeholder="Введите код подтверждения"
              disabled={!emailWatch || !isEmail(emailWatch)}
              maxLength={6}
            />
            <Button
              className="h-[40px] rounded-l-none border-l-0"
              disabled={!emailWatch || !isEmail(emailWatch)}
              onClick={() => confirmEmail(emailWatch)}
              loading={isEmailLoading}
            >
              {authFormTranslate.t("getCode")}
            </Button>
          </Flex>
        </Form.Item>
      </Flex>

      <Flex
        justify="space-between"
        align="flex-start"
        vertical={screens.xs}
        gap={30}
      >
        <Form.Item
          className="w-full"
          name={"password"}
          label={authFormTranslate.t("password")}
          required
          rules={[
            {
              required: true,
              message: errorMessageTranslate.t("password"),
            },
          ]}
        >
          <Input.Password className="h-[40px]" />
        </Form.Item>
        <Form.Item
          className="w-full"
          name={"confirmPassword"}
          label={authFormTranslate.t("confirmPassword")}
          required
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: errorMessageTranslate.t("confirmPassword"),
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(errorMessageTranslate.t("notSamePasswords"))
                );
              },
            }),
          ]}
        >
          <Input.Password className="h-[40px]" />
        </Form.Item>
      </Flex>
      <Button
        className="self-end font-semibold font-montserrat border-none text-black bg-yellow-400 rounded-lg w-40 h-10 cursor-pointer transition duration-200 flex justify-center items-center hover:!bg-yellow-400 hover:!text-black"
        htmlType="submit"
      >
        {t("button")}
      </Button>
    </Form>
  );
};

export default AuthForm;
