import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  IconButton,
  Radio,
  Stack,
  Tooltip,
  Typography
} from '@mui/material';
import { useField } from 'formik';
import { useEffect, useState } from 'react';
import { DynamicCollectionFormInput, StaticCollectionFormInput } from '../../types';
import { transformString } from '../../utils';
import TextInput, { TextInputProps } from '../TextInput';

function CollectionTextInputCheckbox({
  selectionFormKey,
  selectMulti,
  index
}: {
  index: number;
  selectionFormKey: string;
  selectMulti: boolean;
}) {
  const [{ value }, , { setValue }] = useField<number[]>(selectionFormKey);

  return selectMulti ? (
    <Checkbox
      sx={{
        p: 0
      }}
      checked={value.includes(index)}
      onChange={(e) => {
        if (e.target.checked) {
          setValue(value.concat(index));
        } else {
          setValue(value.filter((val) => val !== index));
        }
      }}
    />
  ) : (
    <Radio
      sx={{
        p: 0
      }}
      checked={value.includes(index)}
      onChange={(e) => {
        if (e.target.checked) {
          setValue([index]);
        }
      }}
    />
  );
}

export function StaticCollectionTextInput<
  RequestPayload extends Record<string, any>
>(
  props: TextInputProps &
  Pick<
  StaticCollectionFormInput<RequestPayload>,
  'labels' | 'selectionFormKey' | 'selectMulti'
  >
) {
  const {
    name, selectionFormKey, selectMulti, label, labels, ...rest
  } = props;

  return (
    <Stack gap={1}>
      <Typography variant="h6">
        {transformString(label as string, 'capitalize')}
      </Typography>
      <Divider
        sx={{
          mb: 1
        }}
      />
      <Stack gap={2}>
        {labels.map((_label, i) => (
          <TextInput
            startComponent={
              selectionFormKey && (
                <CollectionTextInputCheckbox
                  index={i}
                  selectMulti={selectMulti ?? false}
                  selectionFormKey={selectionFormKey}
                />
              )
            }
            key={`collection-text-${i.toString()}`}
            {...rest}
            name={`${name}[${i}]`}
            value={_label}
            required
            disabled
          />
        ))}
      </Stack>
    </Stack>
  );
}

export function DynamicCollectionTextInput<
  RequestPayload extends Record<string, any>
>(
  props: TextInputProps &
  Pick<
  DynamicCollectionFormInput<RequestPayload>,
  'maxItems' | 'minItems' | 'selectionFormKey' | 'selectMulti'
  >
) {
  const {
    name,
    selectionFormKey,
    selectMulti,
    label,
    minItems,
    maxItems,
    ...rest
  } = props;
  const [{ value }, , { setValue }] = useField<string[]>(name as string);
  const [totalItems, setTotalItems] = useState(minItems);

  useEffect(() => {
    setTotalItems(minItems);
  }, [minItems]);

  return (
    <Stack gap={1}>
      <Typography variant="h6">
        {transformString(label as string, 'capitalize')}
      </Typography>
      <Divider />
      <Stack gap={2}>
        {new Array(totalItems).fill(0).map((_, i) => (
          <TextInput
            startComponent={
              selectionFormKey && (
                <CollectionTextInputCheckbox
                  index={i}
                  selectMulti={selectMulti ?? false}
                  selectionFormKey={selectionFormKey}
                />
              )
            }
            key={`collection-text-${i.toString()}`}
            {...rest}
            name={`${name}[${i}]`}
            value={value[i] ?? ''}
            label={transformString(`${label} ${i + 1}`, 'capitalize')}
            required
            endComponent={(
              <Tooltip
                title={
                  totalItems === minItems
                    ? `You need to have atleast ${minItems} ${name}`
                    : ''
                }
              >
                <div>
                  <IconButton
                    disabled={totalItems === minItems}
                    size="small"
                    onClick={() => {
                      setValue(value.filter((__, index) => index !== i));
                      setTotalItems(totalItems - 1);
                    }}
                    sx={{
                      p: 0
                    }}
                  >
                    <DeleteIcon
                      sx={{
                        p: 0
                      }}
                      color={totalItems === minItems ? 'disabled' : 'error'}
                    />
                  </IconButton>
                </div>
              </Tooltip>
            )}
          />
        ))}
        <Tooltip
          title={
            totalItems === maxItems
              ? `You can't have more than ${maxItems} ${name}`
              : ''
          }
        >
          <Box
            sx={{
              width: 'fit-content'
            }}
          >
            <Button
              sx={{
                width: 'fit-content'
              }}
              variant="outlined"
              onClick={() => {
                setValue(value.concat(''));
                setTotalItems(totalItems + 1);
              }}
              disabled={totalItems === maxItems}
              startIcon={<AddIcon />}
            >
              Add
              {' '}
              {name}
            </Button>
          </Box>
        </Tooltip>
      </Stack>
    </Stack>
  );
}
