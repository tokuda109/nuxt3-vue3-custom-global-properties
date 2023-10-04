import { type ComponentCustomProperties } from 'vue';

declare module '*.vue' {
  import { defineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  return Component;
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $test: { key: string };
  }
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $test: { key: string };
  }
}
