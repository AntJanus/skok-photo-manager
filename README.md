# Skok Photo Manager

## Purpose

There are not a lot of great photo managers out there. They all do either too many features poorly or hyper focus on a specific userbase/feature without being able to tie things together well.

Skok is meant to be used for a large existing photo gallery and make navigating it and getting the right photos out a breeze. It will also help users organize their vast data hoard in a way that makes sense to use -- even without the photo manager

## Key features

### Indexing photos

Skok can read a large number of photos. The current sample size is about 800gb. What Skok does is crawl through the entire gallery, save all the photo metadata, and then allow you to browse through generated thumbnails/metadata for the entire gallery.

It will also:

1. deduplicate on scan. Meaning that you can add new photos to your hard drive/folder, scan, and have those new photos show up
2. save photo metadata in an easily queryable sqlite database for anyone wanting to dig into things
3. allow users to query for those photos in various ways

### Photo gallery

Unlike most photo galleries, Skok doesn't provide a gallery meant for presentation, it is meant for casual browsing. Using Skok, you can:

1. browse the gallery sequentially (ie. 30 photos at a time, one by one)
2. browse the gallery by dates (view photo collections by year, month, and day)
3. browse through photos that happened on a specific day throughout the years (eg. look at photos taken on the holidays for the past 10 years)
4. use the advanced search to find photos that fit your metadata

### Find duplicates

Skok can quickly identify duplicates within your library. The duplicates have to be exact matches of each other and you'll have the ability to choose which one to keep

### Reorganize photos on drive

Probably the most powerful feature is the ability to reorganize all photos. Skok can either move or copy files into a new date-based directory structure. Skok will also delete duplicates and rename any files with name collissions.

### Cross-platform

Enjoy Skok on Mac/Windows/Linux!

## Feature Roadmap

- [x] index photos
- [x] sequential gallery
- [ ] photo gallery by date
