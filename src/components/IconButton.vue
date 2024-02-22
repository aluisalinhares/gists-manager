<template>
  <button
    :class="[buttonClasses,
             'icon-button',
             border ? `icon-button--border-${color || 'default'}` : '',
             color ? `icon-button--${color}` : 'icon-button--default']"
    @click="handleClick"
  >
    <i :class="[iconClass, iconSizeClass]" />
    <div
      v-if="label !== undefined"
      :class="[labelSizeClass, 'pl-1']"
    >
      {{ label }}
    </div>
  </button>
</template>
  
<script>
import { computed } from 'vue';

export default {
    name: 'IconButton',
    props: {
        iconClass: String,
        label: String,
        count: Number,
        onClick: Function,
        size: {
            type: String,
            default: 'md'
        },
        border: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: 'default'
        }
    },
    setup(props) {
        const handleClick = () => {
            if (props.onClick) {
                props.onClick();
            }
        };

        const buttonClasses = computed(() => {
            return [
                'icon-button',
                props.size === 'sm' && 'text-sm',
                props.size === 'md' && 'text-base',
                props.size === 'lg' && 'text-lg',
            ];
        });

        const iconSizeClass = computed(() => {
            return 'icon-' + props.size;
        });

        const labelSizeClass = computed(() => {
            return 'label-' + props.size;
        });

        return {
            handleClick,
            buttonClasses,
            iconSizeClass,
            labelSizeClass
        };
    }
};
</script>
  
<style scoped>
.icon-button {
    display: inline-flex;
    align-items: baseline;
    justify-content: center;
    cursor: pointer;
    text-align: start;
}


.icon-button--border-default,
.icon-button--border-yellow {
    border-radius: 4px;
    padding: 4px 8px;
}

.icon-button--border--yellow {
    border: 1px solid var(--accent);
    border-radius: 4px;
    padding: 4px 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
}

.icon-button--default {
    background-color: transparent;
    color: var(--text-light);
    border: none;
}

.icon-button--default:hover{
    color: var(--accent);
}

.icon-button--yellow {
    background-color: var(--accent);
    color: var(--text-lighter);
    border: 1px solid var(--accent);
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
}

.icon-button--yellow:hover {
    background-color: var(--accent-dark);
    border-color: var(--accent-dark);
    color: var(--text-lighter);
    box-shadow: 0 2px 4px rgba(252, 163, 17, 0.5);
}

.icon {
    font-size: 14px;
}

.label {
    font-size: 12px;
}

.icon-sm {
    font-size: 14px;
}

.icon-md {
    font-size: 16px;
}

.icon-lg {
    font-size: 18px;
}

.label-sm {
    font-size: 12px;
}

.label-md {
    font-size: 14px;
}

.label-lg {
    font-size: 16px;
}
</style>
