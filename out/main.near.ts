
      import { storage, near } from "./near";
      import { JSONEncoder } from "./json/encoder"
      import { JSONDecoder, ThrowingJSONHandler, DecoderState } from "./json/decoder"
      import {listUserItems as wrapped_listUserItems, getItem as wrapped_getItem, getItems as wrapped_getItems, craft as wrapped_craft, invent as wrapped_invent, initUser as wrapped_initUser, init as wrapped_init} from "./main";

      // Runtime functions
      @external("env", "return_value")
      declare function return_value(value_len: usize, value_ptr: usize): void;
    
import {context as context,storage as storage,near as near,collections as collections} from "./near";
import {Item as Item} from "./model.near";
export class __near_ArgsParser_listUserItems extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_listUserItems>;
        handledRoot: boolean = false;
      
__near_param_accountId: String;
__near_param_offset: i32;
setInteger(name: string, value: i64): void {
if (name == "offset") {
            this.__near_param_offset = <i32>value;
            return;
          }

        super.setInteger(name, value);
      }
setString(name: string, value: String): void {
if (name == "accountId") {
            this.__near_param_accountId = <String>value;
            return;
          }

        super.setString(name, value);
      }
setNull(name: string): void {
if (name == "accountId") {
        this.__near_param_accountId = <String>null;
        return;
      }
if (name == "offset") {
        this.__near_param_offset = <i32>null;
        return;
      }

      super.setNull(name);
    }

      pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null);
    }

        return super.pushObject(name);
      }

      pushArray(name: string): bool {

        return super.pushArray(name);
      }
}
export function __near_encode_Array_i32(
          value: Array<i32>,
          encoder: JSONEncoder): void {
for (let i = 0; i < value.length; i++) {
encoder.setInteger(null, value[i]);
}
}
export function listUserItems(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_listUserItems();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_listUserItems>(handler);
      handler.decoder.deserialize(json);
let result = wrapped_listUserItems(
handler.__near_param_accountId,handler.__near_param_offset
);

        let encoder = new JSONEncoder();
      
if (result != null) {
          encoder.pushArray(null);
          __near_encode_Array_i32(<Array<i32>>result, encoder);
          encoder.popArray();
        } else {
          encoder.setNull(null);
        }

        let val = encoder.serialize();
        return_value(val.byteLength, val.buffer.data);
      
}
export class __near_ArgsParser_getItem extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_getItem>;
        handledRoot: boolean = false;
      
__near_param_itemId: i32;
setInteger(name: string, value: i64): void {
if (name == "itemId") {
            this.__near_param_itemId = <i32>value;
            return;
          }

        super.setInteger(name, value);
      }
setNull(name: string): void {
if (name == "itemId") {
        this.__near_param_itemId = <i32>null;
        return;
      }

      super.setNull(name);
    }

      pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null);
    }

        return super.pushObject(name);
      }

      pushArray(name: string): bool {

        return super.pushArray(name);
      }
}
import { __near_encode_Item } from "./model.near";
export function getItem(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_getItem();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_getItem>(handler);
      handler.decoder.deserialize(json);
let result = wrapped_getItem(
handler.__near_param_itemId
);

        let encoder = new JSONEncoder();
      
if (result != null) {
          encoder.pushObject(null);
          __near_encode_Item(<Item>result, encoder);
          encoder.popObject();
        } else {
          encoder.setNull(null);
        }

        let val = encoder.serialize();
        return_value(val.byteLength, val.buffer.data);
      
}
export class __near_JSONHandler_Array_i32 extends ThrowingJSONHandler {
      buffer: Uint8Array;
      decoder: JSONDecoder<__near_JSONHandler_Array_i32>;
      handledRoot: boolean = false;
      value: Array<i32>;

      constructor(value_: Array<i32>) {
        super();
        this.value = value_;
      }
      
setInteger(name: string, value: i64): void {
          this.value.push(<i32>value);
        }
setNull(name: string): void {
        this.value.push(<i32>null);
      }
      pushArray(name: string): bool {
        assert(name == null && !this.handledRoot);
        this.handledRoot = true;
        return true;
      }
}

export function __near_decode_Array_i32(
        buffer: Uint8Array, state: DecoderState, value: Array<i32> = null):Array<i32> {
      if (value == null) {
        value = new Array<i32>();
      }
      let handler = new __near_JSONHandler_Array_i32(value);
      handler.buffer = buffer;
      handler.decoder = new JSONDecoder<__near_JSONHandler_Array_i32>(handler);
      handler.decoder.deserialize(buffer, state);
      return value;
    }

export class __near_ArgsParser_getItems extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_getItems>;
        handledRoot: boolean = false;
      
__near_param_itemIds: Array<i32>;
setNull(name: string): void {
if (name == "itemIds") {
        this.__near_param_itemIds = <Array<i32>>null;
        return;
      }

      super.setNull(name);
    }

      pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null);
    }

        return super.pushObject(name);
      }

      pushArray(name: string): bool {
if (name == "itemIds") {
          this.__near_param_itemIds = <Array<i32>>__near_decode_Array_i32(this.buffer, this.decoder.state);
          return false;
        }

        return super.pushArray(name);
      }
}
export function __near_encode_Array_Item(
          value: Array<Item>,
          encoder: JSONEncoder): void {
for (let i = 0; i < value.length; i++) {
if (value[i] != null) {
          encoder.pushObject(null);
          __near_encode_Item(<Item>value[i], encoder);
          encoder.popObject();
        } else {
          encoder.setNull(null);
        }
}
}
export function getItems(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_getItems();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_getItems>(handler);
      handler.decoder.deserialize(json);
let result = wrapped_getItems(
handler.__near_param_itemIds
);

        let encoder = new JSONEncoder();
      
if (result != null) {
          encoder.pushArray(null);
          __near_encode_Array_Item(<Array<Item>>result, encoder);
          encoder.popArray();
        } else {
          encoder.setNull(null);
        }

        let val = encoder.serialize();
        return_value(val.byteLength, val.buffer.data);
      
}
export class __near_ArgsParser_craft extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_craft>;
        handledRoot: boolean = false;
      
__near_param_sortedIds: Array<i32>;
setNull(name: string): void {
if (name == "sortedIds") {
        this.__near_param_sortedIds = <Array<i32>>null;
        return;
      }

      super.setNull(name);
    }

      pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null);
    }

        return super.pushObject(name);
      }

      pushArray(name: string): bool {
if (name == "sortedIds") {
          this.__near_param_sortedIds = <Array<i32>>__near_decode_Array_i32(this.buffer, this.decoder.state);
          return false;
        }

        return super.pushArray(name);
      }
}
export function craft(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_craft();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_craft>(handler);
      handler.decoder.deserialize(json);
let result = wrapped_craft(
handler.__near_param_sortedIds
);

        let encoder = new JSONEncoder();
      
if (result != null) {
          encoder.pushObject(null);
          __near_encode_Item(<Item>result, encoder);
          encoder.popObject();
        } else {
          encoder.setNull(null);
        }

        let val = encoder.serialize();
        return_value(val.byteLength, val.buffer.data);
      
}
import { __near_decode_Item } from "./model.near";
export class __near_ArgsParser_invent extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_invent>;
        handledRoot: boolean = false;
      
__near_param_sortedIds: Array<i32>;
__near_param_item: Item;
setNull(name: string): void {
if (name == "sortedIds") {
        this.__near_param_sortedIds = <Array<i32>>null;
        return;
      }
if (name == "item") {
        this.__near_param_item = <Item>null;
        return;
      }

      super.setNull(name);
    }

      pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null);
    }
if (name == "item") {
          this.__near_param_item = <Item>__near_decode_Item(this.buffer, this.decoder.state);
          return false;
        }

        return super.pushObject(name);
      }

      pushArray(name: string): bool {
if (name == "sortedIds") {
          this.__near_param_sortedIds = <Array<i32>>__near_decode_Array_i32(this.buffer, this.decoder.state);
          return false;
        }

        return super.pushArray(name);
      }
}
export function invent(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_invent();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_invent>(handler);
      handler.decoder.deserialize(json);
let result = wrapped_invent(
handler.__near_param_sortedIds,handler.__near_param_item
);

        let encoder = new JSONEncoder();
      
if (result != null) {
          encoder.pushObject(null);
          __near_encode_Item(<Item>result, encoder);
          encoder.popObject();
        } else {
          encoder.setNull(null);
        }

        let val = encoder.serialize();
        return_value(val.byteLength, val.buffer.data);
      
}
export class __near_ArgsParser_initUser extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_initUser>;
        handledRoot: boolean = false;
      
setNull(name: string): void {

      super.setNull(name);
    }

      pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null);
    }

        return super.pushObject(name);
      }

      pushArray(name: string): bool {

        return super.pushArray(name);
      }
}
export function initUser(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_initUser();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_initUser>(handler);
      handler.decoder.deserialize(json);
wrapped_initUser(

);
}
export class __near_ArgsParser_init extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_init>;
        handledRoot: boolean = false;
      
setNull(name: string): void {

      super.setNull(name);
    }

      pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null);
    }

        return super.pushObject(name);
      }

      pushArray(name: string): bool {

        return super.pushArray(name);
      }
}
export function init(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_init();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_init>(handler);
      handler.decoder.deserialize(json);
wrapped_init(

);
}