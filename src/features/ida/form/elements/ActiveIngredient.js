import { Add, Delete, InfoOutlined } from "@mui/icons-material";

import { Badge, Box, Button, IconButton } from "@mui/material";
import { Controller, useFieldArray, useForm, useFormState, useWatch } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";
// import FieldSelectionDialog from "./util/FieldSelectionDialog";
// import UnselectedFIeldsDialog from "./util/UnselectedFIeldsDialog";
import { useState } from "react";
import { isArrayEmpty } from "../../../../ui/FarmUtil";
import FieldSelectionDialog from "../../../../ui/dialog/FieldsSelectionDialog";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";

const isDisabled = (avialableFields, none) => {
    if (none) {
        return true;
    }
    else {
        return !avialableFields || avialableFields.length === 0;
    }
}

const ADD_MIN_WIDTH = 400;

const ActiveIngredient = ({ control, text, pesticides, pests, avialableFields, setValue, minDate, maxDate, defaultDate }) => {

    const draft = useWatch({ name: 'draft', control });

    const { fields, append, prepend, remove, swap, move, insert, update, replace } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "activeIngredients", // unique name for your Field Array
        keyName: "key",
        rules: {
            validate: {
                notEmpty: v => (draft || (v && v.length > 0)) || 'notEmpty',
                notAllFields: v => (draft || isArrayEmpty(unselectedFields)) || 'validateAllFieldsSelected',
            }
        }
    });

    const unselectedFields = avialableFields?.filter(af => !fields.some(f => f.fields?.some(sf => sf.id === af.id)))


    const { errors, isDirty, isSubmitting } = useFormState({ control });



    console.log('active ingredient errors', errors);

    const [openFieldSelection, setOpenFieldSelection] = useState(-1)

    const [openUnselectedFields, setOpenUnselectedFields] = useState(-1)

    const handleSetSelectedFields = (index, fieldSelection) => {
        if (Array.isArray(fieldSelection)) {
            update(index, { ...fields[index], fields: fieldSelection })
        }
        setOpenFieldSelection(-1);
    }

    return (
        <Box display={'flex'} flexDirection={'column'}>
            <Box display={'flex'} justifyContent={'space-between'}>
                <Box padding={1} display={'flex'} flexDirection={'row'} alignItems={'center'}>
                    <Button
                        color={errors?.activeIngredients ? 'error' : 'primary'}
                        // disabled={isDisabled(avialableFields, noActiveIngredient)}
                        sx={{ minWidth: ADD_MIN_WIDTH }}
                        onClick={() => append(
                            { date: defaultDate, amount: 0, resource: '', fields: [...avialableFields] })}
                        variant="contained" disableElevation endIcon={<Add />}>
                        {text.activeIngredients}
                    </Button>
                    {errors.activeIngredients && unselectedFields.length > 0 &&
                        <IconButton size="large" color="info" onClick={() => setOpenUnselectedFields(1)}>
                            <Badge
                                badgeContent={unselectedFields.length}
                                color="error"
                            // max={maxVisibleNotifications}
                            >
                                <InfoOutlined color="primary" />
                            </Badge>
                        </IconButton>
                    }
                    <Box padding={1} />
                </Box>

                {!isArrayEmpty(fields) && <Button type='button'
                    variant="outlined"
                    color='secondary'
                    sx={{ margin: 1 }}
                    size='small'
                    disabled={isArrayEmpty(fields)}
                    onClick={e => remove()}
                >
                    <Delete />
                </Button>}

                {/* <IconButton disabled={isArrayEmpty(fields)} onClick={e => remove()}><Delete /></IconButton> */}

            </Box>
            {/* <Divider/> */}
            {fields.map((field, index) => (
                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} key={index} control={control} index={index} field={field} >
                    {/* {field.id} */}
                    <Controller
                        control={control}
                        name={`activeIngredients.${index}.date`}
                        rules={{ required: true }}
                        render={({ field }) =>
                            <DatePicker label={text.date} text={text}
                                maxDate={maxDate} minDate={minDate}
                                error={errors.activeIngredients?.[index]?.date ? true : false}
                                 />
                        }

                    />

                    <Controller
                        control={control}
                        name={`activeIngredients.${index}.date`}
                        rules={{ required: true }}
                        render={({ field }) =>
                            <TimePicker label={text.endHour} text={text}
                                error={errors.activeIngredients?.[index]?.date ? true : false}
                                />
                        }

                    />
                    <Controller
                        control={control}
                        name={`activeIngredients.${index}.resource`}
                        rules={{ required: true }}
                        render={({ field: { ref, onChange, ...field } }) => <Autocomplete
                            blurOnSelect={true}
                            onChange={(resource, data) => onChange(resource)}
                            options={pesticides}
                            isMulti={false}
                            size='small'
                            label={text.pesticide}
                            getOptionLabel={(option) => option ? option.name : ''}
                            error={errors.activeIngredients?.[index]?.resource ? true : false}
                            renderInput={(params) => <TextField
                                sx={{ padding: 1 }} {...params} />}
                            {...field} />}
                    />


                    <Controller
                        control={control}
                        name={`activeIngredients.${index}.amount`}
                        rules={{ required: true }}
                        render={({ field }) =>
                            <TextField
                                error={errors.activeIngredients?.[index]?.amount ? true : false}

                                width={100} endadornmenttext={text.kg} label={text.amount} type="number"
                            />
                        }
                    />

                    <Controller
                        control={control}
                        name={`activeIngredients.${index}.pests`}
                        rules={{ required: false }}
                        render={({ field: { ref, onChange, ...field } }) => <Autocomplete
                            blurOnSelect={true}
                            onChange={(pest, data) => onChange(pest)}
                            options={pests}
                            isMulti={true}
                            size='small'
                            getOptionLabel={(option) => option ? option.name : ''}
                            label={text.pests}
                            renderInput={(params) => <TextField /*error={errors.sprayParams?.crop ? true : false}*/
                                {...params} />}
                            {...field} />}
                    />
                    <Badge badgeContent={field.fields?.length || 0} color="warning">
                        <Button variant="contained" disableElevation onClick={() => setOpenFieldSelection(index)}>
                            {text.fields}
                        </Button>
                    </Badge>
                    <Box padding={1} />
                    <IconButton onClick={() => remove(index)}><Delete /></IconButton>
                </Box>
            ))}
            {openFieldSelection > -1 &&
                <FieldSelectionDialog open={openFieldSelection > -1} selectedFields={fields[openFieldSelection].fields} avialableFields={avialableFields} text={text} handleClose={(fieldSelection) => handleSetSelectedFields(openFieldSelection, fieldSelection)} />
            }
            {/* {openUnselectedFields > -1 &&

                <UnselectedFIeldsDialog open={openUnselectedFields > -1} avialableFields={unselectedFields} text={text} handleClose={() => setOpenUnselectedFields(-1)} />
            }  */}
        </Box>
    )
}

export default ActiveIngredient
