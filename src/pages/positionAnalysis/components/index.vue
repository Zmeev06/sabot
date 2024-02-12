<script setup lang="ts">
	import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../ui/select';
</script>

<template>
	<div>
		<div class="flex gap-4 items-center">
			<Select>
				<SelectTrigger class="w-[180px]">
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value="apple"> Apple </SelectItem>
						<SelectItem value="banana"> Banana </SelectItem>
						<SelectItem value="blueberry"> Blueberry </SelectItem>
						<SelectItem value="grapes"> Grapes </SelectItem>
						<SelectItem value="pineapple"> Pineapple </SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	</div>
</template>
